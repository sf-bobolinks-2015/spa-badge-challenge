class BadgesController < ApplicationController

  def create
    @badge = Badge.new(badge_params)
    @badge.save
    @badge.update(vote: 1)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      err
    end
  end

  def update
    @badge = Badge.find(params[:id])
    if @badge.vote
      if @badge.update(badge_params)
        head :no_content
      else
        err
      end
    else @badge.vote = 1
    end
  end

private

  def badge_params
    params.permit(:vote, :text)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end

end
