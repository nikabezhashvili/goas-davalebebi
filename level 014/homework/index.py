# 1

text = input("შეიყვანე წინადადება: ")

print(text.upper())

# 2

text = input("შეიყვანე ტექსტი: ")

lower_text = text.lower()

print(lower_text)
print(len(lower_text))


# 3

word = input("შეიყვანე სიტყვა: ")

print(word.capitalize())


# 4

text = input("შეიყვანე ტექსტი: ")
char = input("შეიყვანე სიმბოლო: ")

print(text.find(char))


# 5

text = input("შეიყვანე წინადადება: ")

text_lower = text.lower()

print(text_lower.find("python") != -1)


# 6

def count_char(text, char):
    count = 0

    for i in text:
        if i == char:
            count += 1

    return count

print(count_char("hello world", "l"))


# 7

def count_upper(text):
    count = 0

    for i in text:
        if i.isupper():
            count += 1

    return count

print(count_upper("Hello World PYTHON"))


# 8

def contains_word(text, word):
    return word in text

print(contains_word("python is great", "python"))