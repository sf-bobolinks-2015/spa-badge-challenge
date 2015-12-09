class TeachersController < ApplicationController

def index
  @teachers = Teacher.all
  render json: @teachers
end

def show
  @teacher = Teacher.find(params[:id])
  @badges = @teacher.badges
  render json: {
    :teacher => @teacher,
    :badges => @badges
  }
end
end
