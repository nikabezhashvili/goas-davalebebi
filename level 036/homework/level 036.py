# 2
# return keyword გამოიყენება ფუნქციაში რის მეშვეობით ჩვენ შეგვიძლია გავწყვიტოთ კოდი და დავაბრუნოთ შედეგი
# მაგ.
def add(num1,num2): # აქ მე შევქმენი ფუნქცია რომლის სახელია add და მას აქვს 2 პარამეტრი 
    return num1 + num2 # რის შემდეგსაც მე გამოვიყენე return keyword-ი რომელიც დააბრუნებს მხოლოდ დამატებას
    num1 - num2 # ტერმინალში გამოვა მარტო num1-ის და num2-ის დამატება რადგან return keyword-მა ეგრევე გაწყვიტა კოდი ანუ num1-ის და num2-ის სხვაობა დაიგნორდება

# 3
def multlist(list):
    count = 1 
    for i in list:
        count*=i
    return count

nums = [2,4,6,8,10]
print(multlist(nums))

# 4
def x(num1):
    return num1

def y(num2):
    return num2

a = x(y(5))

print(a)



# 5
# გადავხედე

# სუბარი იყო return Keyword