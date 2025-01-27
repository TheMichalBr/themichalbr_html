#include <iostream>
#include <string>
#include <SFML/Audio.hpp>
#include <SFML/Graphics.hpp>

class MediaPlayer {
public:
    MediaPlayer(const std::string& audioFilePath) {
        if (!buffer.loadFromFile(audioFilePath)) {
            std::cerr << "Error loading audio file!" << std::endl;
        }
        sound.setBuffer(buffer);
    }

    void play() {
        sound.play();
    }

    void pause() {
        sound.pause();
    }

    void stop() {
        sound.stop();
    }

private:
    sf::SoundBuffer buffer;
    sf::Sound sound;
};

int main() {
    std::string audioFilePath = "path/to/your/audiofile.wav";
    MediaPlayer player(audioFilePath);

    char command;
    std::cout << "Media Player Commands: p (play), s (stop), a (pause), q (quit)" << std::endl;
    while (true) {
        std::cin >> command;
        if (command == 'p') {
            player.play();
        } else if (command == 's') {
            player.stop();
        } else if (command == 'a') {
            player.pause();
        } else if (command == 'q') {
            break;
        }
    }

    return 0;
}
sf::RenderWindow window(sf::VideoMode(400, 200), "Media Player");
sf::Font font;
if (!font.loadFromFile("path/to/your/font.ttf")) {
    std::cerr << "Error loading font!" << std::endl;
    return -1;
}

sf::Text playText("Play", font, 20);
playText.setPosition(50, 150);
sf::Text pauseText("Pause", font, 20);
pauseText.setPosition(150, 150);
sf::Text stopText("Stop", font, 20);
stopText.setPosition(250, 150);

while (window.isOpen()) {
    sf::Event event;
    while (window.pollEvent(event)) {
        if (event.type == sf::Event::Closed) {
            window.close();
        } else if (event.type == sf::Event::MouseButtonPressed) {
            if (playText.getGlobalBounds().contains(event.mouseButton.x, event.mouseButton.y)) {
                player.play();
            } else if (pauseText.getGlobalBounds().contains(event.mouseButton.x, event.mouseButton.y)) {
                player.pause();
            } else if (stopText.getGlobalBounds().contains(event.mouseButton.x, event.mouseButton.y)) {
                player.stop();
            }
        }
    }

    window.clear();
    window.draw(playText);
    window.draw(pauseText);
    window.draw(stopText);
    window.display();
}