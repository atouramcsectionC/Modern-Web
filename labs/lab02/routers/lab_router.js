import express from "express";

const router = express.Router();

// Route for welcoming to the lab
router.get("/", (req, res) => {
  res.send("Welcome to the lab router");
});

// Route for name
router.get("/name", (req, res) => {
  res.send("Atoura Moise Clarke");
});

// Route for greetings
router.get("/greetings", (req, res) => {
  res.send("Hello from Atoura, student number so and so");
});


// Add x and y
router.get("/add/:x/:y", (req, res) => {
  const x = parseFloat(req.params.x);
  const y = parseFloat(req.params.y);
  res.send(`${x + y}`);
});

// Calculate based on operation
router.get("/calculate/:a/:b/:operation", (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const operation = req.params.operation;

  let result;

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/": //-> %2F
      if (b !== 0) {
        result = a / b;
      } else {
        res.send("Cannot divide by zero");
        return;
      }
      break;
      
    case "**":
      result = a ** b;
      break;
    default:
      res.send("Invalid Operator");
      return;
  }

  res.send(`Result: ${result}`);
});

export default router;
