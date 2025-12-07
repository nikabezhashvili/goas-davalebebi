# 2
num = 9

if num > 10:
    print("more than 10")

else:
    print("less than 10")

# 3
num = int(input("Enter num:: "))

if num == 15:
    print("equal to 15")
else:
    print("not equal to 15")

# 4

word = input('Enter word: ')

if word == 'group84':
    print('you are correct')

else:
    print("you are wrong")

# 5
for i in range(50,100,5):
    print(i)




# 6
for i in range(1):
    print("Nika Bezhashvili")

# 7
num = 20
while num < 50:
    print(num)
    num += 1

# 8
# for loop
for i in range(0,100):
    print(i)

# while loop
num = 0
while num < 100:
    print(num)
    num += 1

# 9
# for loop
for i in range(0,101):
    print(i)

# while loop
num = 0
while num < 101:
    print(num)
    num += 1

# 10
# for loop
for i in range(10, 21):
    print(i)

# while loop
num = 10

while num < 21:
    print(num)
    num += 1



# 11
# for loop

for i in range(100 , 201 , 5):
    print(i)

# while loop

num = 100

while num < 201:
    print(num)
    num += 5


# 12
for i in range(10,-1,-1):
    print(i)

num = 10

while num > -1:
    print(num)
    num -= 1


# 13
num = float(input("შეიყვანე რიცხვი: "))

if num > 0:
    print("ეს რიცხვი დადებითი რიცხვია")
elif num < 0:
    print("ეს რიცხვი უარყოფითი რიცხვია")
else:
    print("ეს რიცხვი ნულია")


# 14
age = int(input("შეიყვანე შენი ასაკი: "))

if age < 0:
    print("არასწორი ინფო")
elif age <= 12:
    print("ბავშვი ხარ")
elif age <= 19:
    print("მოზარდი/თინეიჯერი ხარ")
elif age <= 64:
    print("ზრდასრული ხართ")
elif age <= 120:
    print("ხანში შესული ხართ")
else:
    print("გურუ ან ჯადოქარი")

# 15
num1 = float(input("შეიყვანე პირველი რიცხვი: "))
num2 = float(input("შეიყვანე მეორე რიცხვი: "))
num3 = float(input("შეიყვანე მესამე რიცხვი: "))

if num1 >= num2 and num1 >= num3:
    print("უდიდესი რიცხვია:", num1)
elif num2 >= num1 and num2 >= num3:
    print("უდიდესი რიცხვია:", num2)
else:
    print("უდიდესი რიცხვია:", num3)



# 16
num = int(input('Enter num(1-7): '))
if num == 1:
    print("ორშაბათი")
elif num == 2:
    print("სამშაბათი")
elif num == 3:
    print("ოთხშაბათი")
elif num == 4:
    print("ხუთშაბათი")
elif num == 5:
    print("პარასკევი")
elif num == 6:
    print("შაბათი")
elif num == 7:
    print("კვირა")
else:
    print("არ ვიცი ეგ რა დღეა")

# 17
num = int(input("შეიყვანე რიცხვი: "))

if num > 50:
    print("რისი გამრავლება 5-ზე:", num * 5)
else:
    print("რიცხვის კვადრატი:", num ** 2)

# 18

password = input("შეიყვანე პაროლი: ")

if password == "goa123":
    print("Password is correct!")
else:
    print("Incorrect password!")

# 19
num = int(input('Enter num: '))

total = 0
i = 1

while i <= num:
    total += i
    i += 1

print('ჯამი', total)
