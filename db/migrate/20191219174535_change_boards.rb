class ChangeBoards < ActiveRecord::Migration[5.2]
  def change
    change_column_null :boards, :private, true
  end
end
