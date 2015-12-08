class VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      render json: @vote, status: :created, location: @vote
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  private

  def vote_params
    params.permit(:upvote?, :student_id, :badge_id)
  end

end
