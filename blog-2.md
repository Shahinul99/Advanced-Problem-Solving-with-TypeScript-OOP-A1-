# How Pick and Omit Utility Types Keep Code DRY

# Introduction
TypeScript provides utility types like Pick and Omit to reduce duplicate code and improve maintainability.

# What is Pick?
Pick creates a new type using selected properties from another interface.

# example
interface User {
  id: number;
  name: string;
  email: string;
}
type UserName = Pick<User, "name">;

Here, only the name property is selected.


# What is Omit?
Omit removes specific properties from an interface.

# example
type UserWithoutEmail = Omit<User, "email">;

Now the new type contains all properties except email.


# Conclusion
Pick and Omit help developers create smaller and reusable types easily. They make TypeScript projects cleaner and easier to manage.