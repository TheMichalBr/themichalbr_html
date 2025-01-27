import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QVBoxLayout, QWidget, QFileDialog, QLabel
from PyQt5.QtMultimedia import QMediaPlayer, QMediaContent
from PyQt5.QtCore import QUrl

class MusicPlayer(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Music Player")
        self.setGeometry(100, 100, 300, 200)

        self.mediaPlayer = QMediaPlayer()

        self.openButton = QPushButton("Open")
        self.openButton.clicked.connect(self.open_file)

        self.playButton = QPushButton("Play")
        self.playButton.clicked.connect(self.play_music)

        self.pauseButton = QPushButton("Pause")
        self.pauseButton.clicked.connect(self.pause_music)

        self.stopButton = QPushButton("Stop")
        self.stopButton.clicked.connect(self.stop_music)

        self.statusLabel = QLabel("No file loaded")

        layout = QVBoxLayout()
        layout.addWidget(self.openButton)
        layout.addWidget(self.playButton)
        layout.addWidget(self.pauseButton)
        layout.addWidget(self.stopButton)
        layout.addWidget(self.statusLabel)

        container = QWidget()
        container.setLayout(layout)

        self.setCentralWidget(container)

    def open_file(self):
        file_name, _ = QFileDialog.getOpenFileName(self, "Open Music File", "", "Audio Files (*.mp3 *.wav *.ogg)")
        if file_name:
            self.mediaPlayer.setMedia(QMediaContent(QUrl.fromLocalFile(file_name)))
            self.statusLabel.setText(f"Loaded: {file_name}")

    def play_music(self):
        self.mediaPlayer.play()
        self.statusLabel.setText("Playing")

    def pause_music(self):
        self.mediaPlayer.pause()
        self.statusLabel.setText("Paused")

    def stop_music(self):
        self.mediaPlayer.stop()
        self.statusLabel.setText("Stopped")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    player = MusicPlayer()
    player.show()
    sys.exit(app.exec_())
