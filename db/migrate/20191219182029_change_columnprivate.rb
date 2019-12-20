class ChangeColumnprivate < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :private
  end
end
