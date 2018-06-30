class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :create, :update, :destroy]

  def index
    render json: current_user.menus.order("created_at")
  end

  def show
    render json: @menu
  end

  def create
    menu = current_user.menus.new(menu_params)
    if menu.save
      render json: menu
    else
      render_errors(menu)
    end
  end

  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render_error(@menu)
    end
  end

  def destroy
    @menu.destroy
  end

  private
    def set_menu
      @menu = current_user.menu.find(params[:id])
    end

    def menu_params
      params.require(:menu).permit()
    end
end
