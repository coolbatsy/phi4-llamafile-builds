# phi4-llamafile-builds

A collection of small scripts, CLI games, and code snippets generated **100% offline** in my Linux terminal using a local Small Language Model (SLM)—zero cloud APIs, zero internet, and zero background daemons.

## System & Model Specs

Everything in this repository was generated and tested locally on modest laptop hardware:

| Component | Spec |
| :--- | :--- |
| **OS** | Ubuntu Cinnamon 26.04.1 LTS (x86_64) |
| **CPU** | AMD Ryzen 5 7520U (4 Cores / 8 Threads @ 4.39 GHz) |
| **RAM** | 8 GB (6.96 GiB usable) |
| **Runtime** | `llamafile` v0.10.6 (CPU-only inference) |
| **Model** | `Phi-4-mini-instruct` (3.8B parameters, `Q5_K_M` GGUF, ~2.7 GB) |

## Builds Log

| File | Description | Prompt Used | Notes |
| :--- | :--- | :--- | :--- |
| [`game.js`](./game.js) | Interactive terminal text-adventure game in Node.js | *"write a simple JS text based game which directly runs in the terminal."* | Working one-shot output with proper `readline` cleanup (`rl.close()`). |

## Running the Projects

* **JavaScript:** `node game.js`

## Takeaways So Far
* **CPU Inference on 8 GB RAM:** Quantized 3.8B models (`Q5_K_M`) hit a sweet spot—sharp enough for clean logic and boilerplate without pushing the system into swap.
* **Explicit Prompts Matter:** Small local models perform best on the happy path out of the box, while edge-case handling improves significantly with targeted follow-up constraints.
