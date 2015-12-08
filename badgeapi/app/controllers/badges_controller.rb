class BadgesController < ApplicationController
  before_action :find_badge, only: [:show, :update, :destroy]

# def index
#   @teachers = Teacher.all
#   render json: @teachers
# end

# def show
#   @teacher = Teacher.find(params[:teacher_id])
#   @badges = @teacher.badges
#   render json: @badges
# end

def create
  @teacher = Teacher.find(params[:teacher_id])
  @badge = @teacher.badges.new(badge_params)
    if @badge.save
       render json: @badge, status: :created, location: @badge
   else
     render json: @badge.errors, status: :unprocessable_entity
   end
end

def update
  if @badge.update(badge_params)
    head :no_content
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
  params.permit(:text, :votes)
end

def find_badge
  p params
 @badge = Badge.find(params[:id])
end

end
