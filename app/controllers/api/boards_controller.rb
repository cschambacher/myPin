class Api::BoardsController < ApplicationController
    def new
        @board = Board.new
        render :new
    end
    
    def index
        @boards = user.boards
    end

    def show
        if board
            render :show
        else
            render json: board.errors.full_messages, status: 404
        end
    end

    def create
        @board = current_user.boards.new(board_params)
        if board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def edit
        board
        render :edit
    end

    def destroy
        board.destroy
        render json: board
    end

    def update
        if board.update(board_params)
            render :show
        else
            render json: board.errors.full_messages, status: 422
        end
    end

    def repin
        pin = pin.where(id = params.require(pin_id).first)
        if pin
            board.pins += pin
            render :show
        else
            render json: board.errors.full_messages, status: 404
        end
    end

    private
    def user
        @user ||= User.find(params[:user_id])
    end

    def board
        @board ||= current_user.boards.find(params[:id])
    end

    def board_params
        params.require(:board).permit(:title, :private, :author_id, :pin_ids)
    end
end
