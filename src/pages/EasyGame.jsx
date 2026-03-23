import SudokuProvider from "../SudokuProvider";
import SudokuBoard from "../SudokuBoard";

export default function EasyGame() {
  return (
    <div className="content">
      <h1>Easy Sudoku</h1>
      <SudokuProvider mode="easy">
        <SudokuBoard />
      </SudokuProvider>
    </div>
  );
}