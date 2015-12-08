class StudentsController < ApplicationController

  def index
    @students = Student.all
    render json: @students
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      render json: @student, status: :created, location: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  def show
    @student = Student.find(params[:id])
    result = { student: @student, badges: @student.badges }
    render json: result
  end

  private

  def student_params
    params.permit(:first_name, :last_name)
  end

end
