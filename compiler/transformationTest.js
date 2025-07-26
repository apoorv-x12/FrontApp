import { $s, $e, $d } from "./transformationFunctions.js";

// 1. Create some base signals
const count = $s(4);
const factor = $s(2);

// 2. Create a derived signal
const doubled = $d(() => count.get() * factor.get());

// 3. Log whenever `doubled` changes
$e(() => {
  console.log("count:", count.get());
});

$e(() => {
  console.log("doubled:", doubled.get());
});

// 4. Update base signals
count.set(1); // logs "doubled: 2"
factor.set(3); // logs "doubled: 3"
count.set(5); // logs "doubled: 15"
