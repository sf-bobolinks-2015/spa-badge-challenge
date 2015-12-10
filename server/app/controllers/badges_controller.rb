class BadgesController < ApplicationController

before_action :find_badge, only: [:show, :update, :destroy]
  def index
    @badges = Badge.all
    render json: @bandges
  end

  def show
    find_badge
    render json: @badge
  end

  def create
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      err
    end
  end

  def update
    find_badge
    if @badge.update(badge_params)
      head :no_content
    else
      err
    end
  end

  def destroy
    find_badge
    @badge.destroy
    head :no_content
  end

  private

  def find_badge
    @badge = Badge.find(params[:id])
  end

  def badge_params
    params.permit(:title)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end
end
