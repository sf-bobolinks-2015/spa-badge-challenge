class BadgesController < ApplicationController
  before_action :find_badge, only: [:show, :update, :destroy]


def create
  @teacher = Teacher.find(params[:teacher_id])
  @badge = @teacher.badges.new(badge_params)
    if @badge.save
       render json: {
        :badges => @teacher.badges, status: :created,
        :teacher => @teacher }

  # render json: {
  #   :teacher => @teacher,
  #   :badges => @badges
  # }
   else
     render json: @badge.errors, status: :unprocessable_entity # put location back
   end
end

def update
  if @badge.votes == nil
    @badge.votes = 1
  end
  if params[:data] == 'up'
    @badge.votes += 1
  elsif params[:data] == 'down'
    @badge.votes -= 1
  end
  if @badge.save
    render json: @badge.votes
  else
    render status: :unprocessable_entity
  end
end

def destroy
  @badge.destroy
  head :no_content
end


private
def badge_params
  params.permit(:text, :votes, :teacher_id)
end

def find_badge
 @badge = Badge.find(params[:id])
end

end
