

const IntDemo = `\
print("Hello World!")
`

const StringDemo = `\
a = "Hello"

print(a[0])
`

const FunctionDemo = `\
def function():
    print("hello function")
`

const DecoratorDemo = `\
def wrap():

    def inner():
        print("DecoratorDemo")

    return inner
`


export default {
    IntDemo: IntDemo,
    StringDemo: StringDemo,
    FunctionDemo: FunctionDemo,
    DecoratorDemo: DecoratorDemo,
}