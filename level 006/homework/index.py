# 1

for i in range(1, 21):
    print(i)


# 2

for i in range(1, 51):
    if i % 2 == 0:
        print(i)


# 3

n = int(input("შეიყვანე რიცხვი: "))

total = 0

for i in range(1, n + 1):
    total += i

print(total)


# 4

num = 10

while num >= 1:
    print(num)
    num -= 1


# 5

password = ""

while password != "python123":
    password = input("შეიყვანე პაროლი: ")

print("Access granted")


# 6

num = int(input("შეიყვანე მთელი რიცხვი: "))

count = 0

if num == 0:
    count = 1
else:
    while num != 0:
        num //= 10
        count += 1

print(count)


# 7

n = int(input("შეიყვანე რიცხვი: "))

result = 1

for i in range(1, n + 1):
    result *= i

print(result)


# 8

word = input("შეიყვანე სიტყვა: ")

for char in word:
    print(char)


# 9

total = 0
count = 0

while True:
    num = float(input("შეიყვანე რიცხვი: "))

    if num == 0:
        break

    total += num
    count += 1

if count > 0:
    average = total / count
    print(average)
else:
    print("რიცხვები არ შეგიყვანიათ")



# 10

secret = 7

guess = 0

while guess != secret:
    guess = int(input("გამოიცანი რიცხვი 1-დან 10-მდე: "))

    if guess != secret:
        print("Try again")

print("Correct")