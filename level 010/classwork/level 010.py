# 2

# boolean არის ისეთი მონაცემთა ტიპი რომელსაც აქვს მხოლოდ 2 მნიშვნელობა  true ან false ანუ სიმარტლე ან სიცრუე 
# boolean შეიძლება მივიღოთ შედარების დროს 
print(5<10) # პასუხი იქნება True 
print(5>10) # პასუხი იქნება False 

# 3

# მოკლედ რომ ვთქვათ binary code არის კომპიუტერის ენა (მისი პირდაპპირი თარგმანი ქართულად არის ორობითი კოდი)
# როგორც სოლოლერნში არის ნახსენები 1 = true  და 0 = false 

# 4 

# bool არის ფუნქცია რის მეშვეობითაც შეგვიძლია გადავიყვანოთ ერთი მმონაცემთა ტიპიდან (მაგ str) ბულიანში და შედეგი იქნება true ან false

# 5

num1 = 10
num2 = 5
print(num1 == num2)

# 6

a = float(input("შემოიტანეთ ნებისმიერი რიცხვი შედარებისთვის №1: "))
b = float(input("შემოიტანეთ ნებისმიერი რიცხვი შედარებისთვის №2: "))

# არ ვიცოდი რომელი დამეწერა მაგიიტომაც დავწერე მეტობა , ნაკლებობა და მკაცრი ტოლობა 

print(a > b)
print(a < b)
print(a == b)

# 7

word1 = input("შემოიყვანეთ რაიმე სიტყვა: ")
word2 = "python"
print(word1 == word2)

# 8

num = float(input("შეიყვანე რიცხვი: "))
print(num > 100)

# 9

password1 = input("შემოიყვანეთ პაროლი: ")
password2 = "Python123"
print(password1 == password2)

# 10

a = float(input("შემოიტანეთ ნებისმიერი რიცხვი შედარებისთვის №1: "))
b = float(input("შემოიტანეთ ნებისმიერი რიცხვი შედარებისთვის №2: "))

print(a > b)
print(a < b)
print(a == b)

# 11

a = "goa is "
b = "the top "
c = "1 "
d = "IT "
e = "academy "
print(a+b+c+d+e)

# 12

a = float(input("შემოიტანეთ ნებისმიერი რიცხვი №1: "))
b = float(input("შემოიტანეთ ნებისმიერი რიცხვი №2: "))
c = float(input("შემოიტანეთ ნებისმიერი რიცხვი №3: "))
d = float(input("შემოიტანეთ ნებისმიერი რიცხვი №4: "))

print((a + b + c + d) / 4)

# 13

a = 10
b = 3.14
c = "goa"
d = True

print(type(a))
print(type(b))
print(type(c))
print(type(d))

# 14
a = "world"
b = "World"

print(a == b)

# 15
a = "40"
b = "15"
c = "25"
d = "10"

a = int(a)
b = int(b)
c = int(c)
d = int(d)

print(a + b + c + d)

# 16
# ჯერ ვერ მივხვდი თუ უნდა შეევქმნა ინტეჯერის ტიპის ცვლადი კიდე ერთხელ რატომ უნდა გადავიყვანო
a = 12
b = 34
c = 56

print(str(a) + str(b) + str(c))
