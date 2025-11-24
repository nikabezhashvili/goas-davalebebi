# 2
# False
print(True and False)
print(False or False)
print(5 < 2)
print(10.5 <= 10.49)
print(False and True)

# True
print(True and True)
print(True or False)
print(5 > 4)
print(10 < 15)
print(20 == 20)

# 3

# sequancing - კოდის რიგობრივად შესრულება
# iteration - ერთი და იგივე პროცესის გამეორება 
# selection - არჩევა

# 4
# მარტივ მაგალითს დავაკეთებ
print(1)
print(2)
print(3)
print(4)
# ეს კოდი sequencing-ი არის რადგან ტერმინალში რიგობრივად გამოიტანს 1 , 2 , 3 , 4

# 5
# for loop-ი არის ციკლი რომელიც ერთსა და იმავე მოქმედებას ასრულებს იმდენჯერ, რამდენჯერაც ჩვენ მივუთითებთ
# ის გვხდება მაშინ როცა ვთქვათ რაღაცის ბევრჯერ გამოტანა გვინდა 
# მაგ. მე მსურს რომ გამოვიტანო ჩემი სახელი 10 ჯერ
# print("nika")
# print("nika")
# print("nika")
# print("nika")
# print("nika")
# და ა.შ ნაცვლად ამისა გამოვიყენებ for loop-ს
for i in range(10):
    print("nika")

# 6
# range-ში გადაეცემა 3 სახის მონაცემი ესენია №1 - stop ; №2 - start ; №3 - step
# ანუ ასე range(start,stop,step)
# stop №1-ია კოდში რადგან  stop-ს გარეშე ციკლი ვერ გაიგებს სად უნდა გაჩერდეს
# მაგ.
# range (3) გაიშიფრება ასე start - 0 , stop - 3 , step-1

# იგი მუშაობს ასე 
# მაგ. კოდი გვაქვს ასეთი
for i in range(5):
    print(i)
# i ესე რომ ვთქვად  არის ცვლადის სახელი 
# in არის = 
# range(5) არის ცვლადის მნიშვნელობა
# ჯერ კომპიუტერი კოდს ხედავს და კითხულობს რას ეუბნებიან (გამომიტანე რიცხვები 5-მდე)
# ხოლო მერე კითხულობს რომ დამიბეჭდე i ამ დროს i=0 და გამოიტენს 0 
# მერე გადავა ისევ ზევით და i გაუტოლებს 1-ს (i=1) და გამოიტანს 1 
# ამ პროცესს გაიმეორებს(ეს პროცესი იტერაციაა) და საბოლოო შედეგი იქნება ასეთი 
# 0
# 1
# 2
# 3
# 4

# 7
for i in "Dodge Viper ACR":
    print(i)

# 8
for i in range(100):
    print("ბეჟაშვილი")

# 9

for i in range(46):
    print("შავი")

# 10
for i in range(32):
    print("ნ")

# 11
a = input("შემოიყვანეთ რაიმე მნიშვნელობა №1: ")
b = input("შემოიყვანეთ რაიმე მნიშვნელობა №2: ")
c = input("შემოიყვანეთ რაიმე მნიშვნელობა №3: ")
d = int(input("შემოიყვანეთ რიცხვი: "))

d = str(d)

e = a + b + c + d
print(e)

# 12
name = "nika"
age = 14
pi = 3.14
t = True
print(type(name))
print(type(age))
print(type(pi))
print(type(t))


# 13
num1 = int(input("შემიტანეთ ნებისმიერი რიცხვი №1: "))
num2 = int(input("შემიტანეთ ნებისმიერი რიცხვი №2: "))
num3 = int(input("შემიტანეთ ნებისმიერი რიცხვი №3: "))
num4 = int(input("შემიტანეთ ნებისმიერი რიცხვი №4: "))

num5 = num1 + num2 + num3 + num4
print("რიცხვთა ჯამი", num5)

# 14
# შესრულებული მაქვს