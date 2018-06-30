class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  before_action :set_menu

  def index
    render json: @menu.items.order("created_at")
  end

  def show
    render json: @item
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: error
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: error
    end
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def set_menu
      @menu = Menu.find(params[:menu_id])
    end

    def item_params
      params.require(:menu).permit(:name, :price, :view, :purchase, :menu_id, :category)
    end
end
