# 1
# ჯერ ჯერობით ჩვენ ვიცით 5 შედარების ოპერატორები ესენია > ; < ; >= ; <= და ==

# >
print(3 > 2)
print(2 > 3)
print(4 > 1)
print(5 > 4)
print(84 > 37)

# <
print(12 < 15)
print(15 < 14)
print(34< 37)
print(45 < 34)
print(99 < 100)

# >=
print(200 >= 100)
print(200 >= 200)
print(200 >= 300)
print(450 >= 451)
print(50 >= 75)

# <=
print(60 <= 59)
print(60 <= 60)
print(60 <= 75)
print(80 <= 79)
print(135 <= 135)

# ==
print(5 == 5)
print(7 == 3)
print(5 == "5")
print(2 == 2)
print("5" == 5.0)


# 2
# ლოგიკურ ოპერატორებში შედის or და and
# and — და
# or — ან

#       or მაგალითები
True or True      # True
False or False    # False
True or False     # True
False or True     # True

#       and მაგალითები
True and True     # True
False and False   # False
True and False    # False
False and True    # False

# 3 
# პრინციპში ორი ვარიანტის ამ დავალების გაკეთებისა 1) ცვლადებში შენახვა შედარება, true და false და ა.შ 
# 2) თვითონ პრინტში მაგალითების გაკეთება | მაგიტომაც or -ში პირველ ვარიანტს გამოვიყენებ ხოლო and -ში მეორეს
# or 
a = True
b = False
print(a or b)

num1 = 4 < 5
num2 = False
print(num1 or num2)

num3 = 5 == "5"
num4 = False
print(num3 or num4)

# and 
print(10 > 5 and 8 > 2)   
print(7 > 10 and 3 > 1)  
print(4 == 4 and 6 < 1) 

# 4
num1 = float(input("შემოიტანეთ ნებისმიერი რიცხვი: "))
num2 = 20

print(num1 > num2)
print(num1 = num2)
print(num1 < num2)

# 5

user_name = input("შემოიყვანეთ თქვენი სახელი: ")
my_name = "Nika"
print(user_name == my_name)

# 6

user_age = int(input("შემოიყვანეთ თქვენი ასაკი: "))
age = 18
print(user_age > age)
print(user_age < age)