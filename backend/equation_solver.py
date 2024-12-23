import sympy
import json
from sympy.parsing.latex import parse_latex

class EquationSolver:
    def __init__(self):
        self.variables = {'x': sympy.Symbol('x'), 'y': sympy.Symbol('y'), 'z': sympy.Symbol('z')}
    
    def solve(self, latex_eq):
        try:
            # Convert LaTeX to sympy expression
            expr = parse_latex(latex_eq)
            
            # Detect equation type
            if '=' in latex_eq:
                # Solving for variable
                lhs, rhs = expr.args
                eq = sympy.Eq(lhs, rhs)
                result = sympy.solve(eq)
                return json.dumps({
                    "type": "equation",
                    "latex": latex_eq,
                    "solution": str(result)
                })
            else:
                # Expression evaluation
                result = sympy.simplify(expr)
                return json.dumps({
                    "type": "expression",
                    "latex": latex_eq,
                    "result": str(result)
                })
        except Exception as e:
            return json.dumps({
                "type": "error",
                "latex": latex_eq,
                "error": str(e)
            })