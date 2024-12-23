import sympy
import json

# Solve recognized equation
def solve_equation(equation_str):
    x = sympy.Symbol('x', real=True)
    expr = sympy.sympify(equation_str)
    solutions = sympy.solve(expr, x)
    return solutions
