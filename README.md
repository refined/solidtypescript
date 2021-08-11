# solidtypescript
SOLID principles on practice 

# 
Startup -> Legacy
Spending time diagramm

# What we want to achive every day devepoment?
Extending
Not breaking something else
Easier to read

# Here we are. In honor of Robert Marin == Uncle Bob
1. Single Responsibility - There should never be more than one reason for a class to change
2. Open/Closed - Software entities should be open for extension, but closed for modification
3. Liskov Substitution - Functions that use references to base classes must be able to use objects of derived classes without knowing it.
4. Interface Segregation - Many client-specific interfaces are better than one general-purpose interface.
5. Dependency Inversion - Depend upon abstractions, not concretions.

# code 
# code
# code

# Conclusions
SOLID principles are principles - not rules
Avoid overfragmenting your code for sake Single Responsibility or other SOLID. 
Don't try to achieve SOLID, use SOLID to achieve **maintainability**.


# Shortcut
1. Single Responsibility - There should never be more than one reason for a class to change
	Only one reason to change != class that have only one responsibility	
    Make things (classes, functions, etc.) responsible for fulfilling one type of role.
        i.e. Refactor code responsibilities into separate classes.

2. Open/Closed - Software entities should be open for extension, but closed for modification
    Be able to add new functionality to existing code easily without modifying existing code.
	So you are never break the core of your system.
        i.e. Use interfaces. These can define what subclasses will require and strengthen Principle 1. by separating code duties.

3. Liskov Substitution - Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
    When a class inherits from another class, the program shouldn't break and you shouldn't need to hack anything to use the subclass.
        i.e. Define constructor arguments to keep inheritance flexible.

4. Interface Segregation - Many client-specific interfaces are better than one general-purpose interface.
    Make interfaces (parent abstract classes) more specific, rather than generic.
        i.e. Create more interfaces (classes) if needed and/or provide objects to constructors.

5. Dependency Inversion - Depend upon abstractions, not concretions.
    Make classes depend on abstract classes rather than non-abstract classes.
        i.e. Make classes inherit from abstract classes.
