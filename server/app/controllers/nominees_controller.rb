class NomineesController < ApplicationController

before_action :find_nominee, only: [:show, :update, :destroy]

  def index
    @nominees = Nominee.all
    render json: @nominees
  end

  def show
    find_nominee
    render json: @nominee
  end

  def create
    @nominee = Nominee.new(nominee_params)
    if @nominee.save
      render json: @nominee, status: :created, location: @nominee
    else
      err
    end
  end

  def update
    find_nominee
    if @nominee.update(nominee_params)
      head :no_content
    else
      err
    end
  end

  def destroy
    find_nominee
    @nominee.destroy
    head :no_content
  end

  private

  def find_nominee
    @nominee = Nominee.find(params[:id])
  end

  def nominee_params
    params.permit(:title)
  end

  def err
    render json: @nominee.errors, status: :unprocessable_entity
  end
end
