class VotesController < ApplicationController

  before_action :find_vote, only: [:show, :update]

  def show
    find_vote
    render json: @vote
  end

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @vote, status: :created, location: @vote
    else
      err
    end
  end

  def update
    find_vote
    if @vote.update(vote_params)
      head :no_content
    else
      err
    end
  end

  private

  def find_vote
    @vote = Vote.find(params[:id])
  end

  def vote_params
    params.permit(:title)
  end

  def err
    render json: @vote.errors, status: :unprocessable_entity
  end

end
