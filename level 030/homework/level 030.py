# 2
# .upper() — სტრინგში არსებულ ყველა ასოს აქცევს დიდ ასოდ
# .lower() — სტრინგში არსებულ ყველა ასოს აქცევს პატარა ასოდ
# .find() — ეძებს მითითებულ სიმბოლოს ან სიტყვას სტრინგში და იმ შემტხვევაში თუ ამ სიმბოლო ან სიტყვას ვერ იპოვის ტერმინალში გამოგვიტანს -1 -ს

# 3
word = input('შეიყვანე წინადადება: ')
print(word.lower())

# 4
email = input('enter your email: ')
if "@" in email:
    result = "email contains @ symbol"
else:
    result = "email does not contain @ symbol"
print(result.upper())

# 5
book_title = input("შეიყვანეთ წიგნის დასახელება: ")
# სათაურის სტილში ანუ პირველი სიტყვა დიდი რომ უნდა იყოს?
print(book_title.capitalize())

# 6
word = input('შეიყვანე წინადადება: ')
simbol = input('შეიყვანე სიმბოლო: ')
print(word.count(simbol))

# 7
word = input("შეიყვანეთ სიტყვა: ")
if word== word.upper():
    print("სიტყვა უკვე დიდია!")
else:
    print(word.upper())