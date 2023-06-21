// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    // custom commands
    .invoke_handler(tauri::generate_handler![create_app_data_dir])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn create_app_data_dir() {
  println!("I was invoked from JS!");
}
