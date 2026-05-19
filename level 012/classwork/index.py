# 1
def a(a, b, c, d, e):
    sentence = f"{a} {b} {c} {d} {e}."
    return sentence

word1 = input("შეიყვანე პირველი სიტყვა: ")
word2 = input("შეიყვანე მეორე სიტყვა: ")
word3 = input("შეიყვანე მესამე სიტყვა: ")
word4 = input("შეიყვანე მეოთხე სიტყვა: ")
word5 = input("შეიყვანე მეხუთე სიტყვა: ")

print(a(word1, word2, word3, word4, word5))

# 2
def convert_distance():
    km = float(input("შეიყვანე მანძილი კილომეტრებში: "))
    meters = km * 1000
    centimeters = km * 100000
    print(f"{km} კმ = {meters} მეტრი")
    print(f"{km} კმ = {centimeters} სანტიმეტრი")

