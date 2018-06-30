# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.times do
  menu = Menu.create(name: 'Dinner')
  30.times do
    menu.items.create(
      name: Faker::Food.dish,
      price: 6.00,
      category: ['Dim Sum', 'Stir Fry', 'Seafood', 'Hot Pot', 'Fried Rice', 'Noodle Soups'].sample,
      view: 0,
      purchase: 0,
      menu_id: menu.id
    )
  end
end