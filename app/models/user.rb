class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness:true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :reviews
  has_many :cart_items
  has_many :products,
    through: :cart_items,
    source: :products

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_session_token unless self.session_token
  end

  def generate_session_token
    self.session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64
    end
    self.session_token
  end
end
