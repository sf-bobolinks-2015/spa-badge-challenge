class StudentsController < ApplicationController

  def index
    p "*" * 50
    @students = Student.all
    render json: @students
  end

  def create
    @student = Student.new(student_params)
  end

  def show
    @student = Student.find(params[:id])
    @badges = @student.badges
    upvotes = []
    downvotes = []
    @badges.each do |badge|
     upvotes << badge.votes.where(value: true)
     downvotes << badge.votes.where(value: false)
    end
    finalvotes = []
    upvotes.each_with_index do |votes, index|
      finalvotes << votes.count - downvotes[index].count

    end
    p finalvotes
    # p finaldownvotes
    #   .where(value: true).count
    # down = votes.where(value: false).count
    # @votes = up - down
    render json: { student: @student, badges: @badges, votes: finalvotes }
    end

  private

  def student_params
    params.permit(:name)
  end

  # sing res yes, convolute your shit also yes.....
  # def find_student
  #   @student = Student.find(params[:id])
  # end

end
