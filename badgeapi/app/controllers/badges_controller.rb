class BadgesController < ApplicationController
  before_action :find_badge, only: [:show, :update, :destroy]


def create
  # check_session_for_badges
  @teacher = Teacher.find(params[:teacher_id])
  @badge = @teacher.badges.new(badge_params)
    if @badge.save
      render json: {
        :badges => @teacher.badges.order("votes DESC"), status: :created,
        :teacher => @teacher
      }
    else
     render json: @badge.errors, status: :unprocessable_entity
    end
end

def update
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

private
  def badge_params
    params.permit(:text, :votes, :teacher_id)
  end

  def find_badge
   @badge = Badge.find(params[:id])
  end

  def check_session_for_badges
    session[:votes] = [] if session[:votes] == nil
  end

end
