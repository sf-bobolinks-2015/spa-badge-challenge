class StudentsController < ApplicationController

  def index
    @students = Student.all
    render json: @students
  end

  def create
    @student = Student.new(student_params)
  end

  def show
    find_student
  end

  private

  def student_params
    params.permit(:name)
  end

  def find_student
    @student = Student.find(params[:id])
  end

end
