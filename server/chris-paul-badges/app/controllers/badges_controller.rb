class BadgesController < ApplicationController


  def index
    # p params
    # p @badges = Badge.where(student_id: params[:student_id])
    # p names = Badge.find_by(student_id: params[:student_id]).student.name

    # render json: @badges
  end

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

