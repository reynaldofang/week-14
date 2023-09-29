import { render } from "@testing-library/react";
import ProfilePage from "../features/ProfilePage";

test('Menguji apakah judulnya adalah "Profile Page"', () => {
  const { getByText } = render(<ProfilePage />);
  const titleElement = getByText("Profile Page"); // Cari teks langsung
  expect(titleElement).toBeTruthy(); // Akan melewati tes jika elemen ditemukan
});
