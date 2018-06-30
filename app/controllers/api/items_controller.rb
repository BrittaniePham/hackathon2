class Api::ItemsController < ApplicationController
  before_action :set_menu, only [:show, :update, :destroy]

  def index
    render json: current_user.items.order("created_at")
  end

  def show
    render json: @item
  end

  def create
    item = current_user.items.new(item_params)
    if item.save
      render json: item
    else
      render_errors(item)
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render_error(@item)
    end
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @reservation = current_user.items.find(params[:id])
    end

    def item_params
      params.require(:menu).permit(:name, :price, :view, :purchase, :menu_id)
    end
end
