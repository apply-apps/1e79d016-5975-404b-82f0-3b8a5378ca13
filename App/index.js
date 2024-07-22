// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Button, Alert } from 'react-native';

const GRID_SIZE = 16;
const CELL_SIZE = Dimensions.get('window').width / GRID_SIZE;

const initialSnake = [{ x: 8, y: 8 }];
const initialFood = { x: 5, y: 5 };

const SnakeGame = () => {
    const [snake, setSnake] = useState(initialSnake);
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useState('RIGHT');
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const intervalId = setInterval(moveSnake, 200);
            return () => clearInterval(intervalId);
        }
    }, [snake, direction, running]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    if (direction !== 'DOWN') setDirection('UP');
                    break;
                case 'ArrowDown':
                    if (direction !== 'UP') setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    if (direction !== 'RIGHT') setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    if (direction !== 'LEFT') setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [direction]);

    const moveSnake = () => {
        const head = { ...snake[0] };
        switch (direction) {
            case 'UP':
                head.y -= 1;
                break;
            case 'DOWN':
                head.y += 1;
                break;
            case 'LEFT':
                head.x -= 1;
                break;
            case 'RIGHT':
                head.x += 1;
                break;
        }

        const newSnake = [head, ...snake];
        if (head.x === food.x && head.y === food.y) {
            setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
        } else {
            newSnake.pop();
        }
        if (checkCollision(head, newSnake)) {
            Alert.alert("Game Over", "You crashed!", [{ text: "Restart", onPress: resetGame }]);
            setRunning(false);
        } else {
            setSnake(newSnake);
        }
    };

    const checkCollision = (head, newSnake) => {
        return head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE || newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    };

    const resetGame = () => {
        setSnake(initialSnake);
        setFood(initialFood);
        setDirection('RIGHT');
        setRunning(true);
    };

    return (
        <View style={styles.gameContainer}>
            <Button title="Start Game" onPress={resetGame} disabled={running} />
            <View style={styles.grid}>
                {snake.map((segment, index) => (
                    <View key={index} style={[styles.snakeSegment, { left: segment.x * CELL_SIZE, top: segment.y * CELL_SIZE }]} />
                ))}
                <View style={[styles.food, { left: food.x * CELL_SIZE, top: food.y * CELL_SIZE }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
        alignItems: 'center',
    },
    grid: {
        width: GRID_SIZE * CELL_SIZE,
        height: GRID_SIZE * CELL_SIZE,
        backgroundColor: '#EAEAEA',
        marginTop: 20,
        position: 'relative',
    },
    snakeSegment: {
        width: CELL_SIZE,
        height: CELL_SIZE,
        backgroundColor: 'green',
        position: 'absolute',
    },
    food: {
        width: CELL_SIZE,
        height: CELL_SIZE,
        backgroundColor: 'red',
        position: 'absolute',
    },
});

export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Snake Game</Text>
            <SnakeGame />
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});