class BadgesController < ApplicationController
  before_action :find_badge, only: [:show, :update, :destroy]

def index
  @badges = Badge.all
  render json: @badges
end

def show
  render json: @badge
end

def create
  @badge = Badge.new(badge_params)
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
 @badge = badge.find(params[:id])
end

end
