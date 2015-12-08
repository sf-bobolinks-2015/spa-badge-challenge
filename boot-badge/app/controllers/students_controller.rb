class StudentsController < ApplicationController

  def index
    @students = Student.all
    render json: @students
  end

  def show
    @student = Student.find(params[:id])
    @student_badges = @student.badges
    render json: @student_badges
  end

end
