class BadgesController < ApplicationController

  def create
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      render json: @badge.errors, status: :unprocessable_entity
    end
  end

  private

  def badge_params
    params.permit(:title, :student_id)
  end

end
