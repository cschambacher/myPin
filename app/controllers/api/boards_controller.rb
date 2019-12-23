class Api::BoardsController < ApplicationController
    def new
        @board = Board.new
        render :new
    end
    
    def index
        @boards = Board.all.where(author_id: current_user.id)
    end

    # def homeindex
    #     @pins = Pin.all
    #     render :index 
    # end

    def show
        @board = Board.find(params[:id])
        if @board
            render :show
        else
            render json: @board.errors.full_messages, status: 404
        end
    end

    def create
        
        @board = current_user.boards.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def edit
        @board = Board.find(params[:id])
        render :edit
    end

    def destroy
        @board = current_user.boards.find(params[:id])
        @board.destroy
        render json: @board
    end

    def update
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render json: @board
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private

    def board_params
        params.require(:board).permit(:title, :private, :author_id)
    end
end
