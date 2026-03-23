import SudokuProvider from "../SudokuProvider";
import SudokuBoard from "../SudokuBoard";

export default function NormalGame() {
  return (
    <div className="content">
      <h1>Normal Sudoku</h1>
      <SudokuProvider mode="normal">
        <SudokuBoard />
      </SudokuProvider>
    </div>
  );
}