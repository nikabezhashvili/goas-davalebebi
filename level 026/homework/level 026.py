# 1
numbers = [10, 20, 30, 40, 50]
# 1.1
for num in numbers:
    print(num)
# 1.2
total = 0
for num in numbers:
    total += num
print("ჯამი:", total)

# 2
even_count = 0
# ისედაც მაქვს სია numbers და გამოვიყენებ მას
for num in numbers:
    if num % 2 == 0:
        even_count += 1
print("ლუწი რიცხვების რაოდენობა:", even_count)
# 3
numbers = [10, 20, 30, 40, 50]
min_num = numbers[0]
max_num = numbers[0]
for num in numbers:
    if num < min_num:
        min_num = num
    if num > max_num:
        max_num = num
print("უმცირესი ელემენტი:", min_num)
print("უდიდესი ელემენტი:", max_num)

# 4
numbers = [10, 21, 32, 43, 54, 65, 76]
for num in numbers:
    if num % 2 != 0:
        print("კენტი რიცხვი:", num) 

# 5
total = 0
while True:
    num = int(input("Enter a number : "))
    if num == 0:
        break
    total += num
print("ჯამი:", total)
# 6
while True:
    num = int(input("Enter a number : "))
    if num < 0:
        break
# 7
while True:
    num = int(input("Enter a number : "))
    if num % 5 == 0:
        break
# 8
attempts = 0
while True:
    num = int(input("Enter a number : "))
    attempts += 1
    if num % 2 == 0:
        break
print('მცდელობების რაოდენობა:', attempts)

# 9
while True:
    num = int(input("Enter a number: "))
    if num % 2 != 0:
        break  


# 10
while True:
    num = int(input("enter number:"))
    if num < 0:
        continue
    if num == 0:
        break

# 11
while True:
    num = int(input('enter number: '))
    if num == 100:
        print('you enter corect num')
    if num == 0:
        break