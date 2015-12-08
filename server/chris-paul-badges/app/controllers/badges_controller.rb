class BadgesController < ApplicationController


  def index
  def create
    @student = Student.find(params[:student_id])
    @badge = Badge.new(badge_text: params[:text], student_id: @student.id)

    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      err
    end

  end



  private

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end


end

