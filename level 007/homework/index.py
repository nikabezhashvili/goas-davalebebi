# 2

total = 0

for i in range(1, 6):
    print(i)
    total += i

print("ჯამი:", total)


# 3

password = ""

while password != "1234":
    password = input("შეიყვანე პაროლი: ")

print("პაროლი სწორია")


# 4

n = int(input("შეიყვანე რიცხვი: "))

i = 1

while i <= n:
    print(i)
    i += 1

# 5

count = 0
total = 0

while count < 3:
    num = float(input("შეიყვანე რიცხვი: "))
    total += num
    count += 1

average = total / 3

print("საშუალო:", average)


# 6

a = input("შეიყვანე პირველი მნიშვნელობა: ")
b = input("შეიყვანე მეორე მნიშვნელობა: ")
c = input("შეიყვანე მესამე მნიშვნელობა: ")

print(type(a))
print(type(b))
print(type(c))


# 7

num1 = int(input("შეიყვანე პირველი რიცხვი: "))
num2 = int(input("შეიყვანე მეორე რიცხვი: "))

result = num1 > 5 and num2 < 10

print(result)


# 8

result = 1

for i in range(1, 6):
    result *= i

print(result)


# 9

for i in range(1, 6):
    print(i * i)


# 10

count = 0

while count < 10:
    print("Hello")
    count += 1


# 13

total = 0

while total < 50:
    num = int(input("შეიყვანე რიცხვი: "))
    total += num

print("საბოლოო ჯამი:", total)