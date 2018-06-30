Devise.setup do |config|
  config.secret_key = Rails.env.production? ? ENV['DEVISE_SECRET_KEY'] : 'cb1881c3b9e0af9825a5a410fbc53c75a3323c24fa48d8ce5aa72b128c974b9c62ac1b8eb37f67801516f7f0114dfb45206a6763b651a4f5af6a069c577d4e62'
end