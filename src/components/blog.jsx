import React, { useEffect } from 'react';

export default function Blog() {
    useEffect(()=>{
        document.title = "Blog | Mubarak"
    }, [])
    // Sample blog posts data
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding Optimization Problems: A Practical Approach',
            content: `In many real-world scenarios, solving a problem isn't just about finding any solution—it's about finding the best one. 
            This often involves either maximizing or minimizing a particular objective while adhering to certain constraints. For example, consider a woman seeking the best partner. She might have specific criteria such as height (6 feet), appearance (handsome), and social status (respected, influential, driven, well-liked), with an additional constraint that he must be no older than 35 years. Among the millions of potential candidates, many could meet these criteria, but the optimal solution would involve finding the man who excels in all these aspects. However, finding such an ideal candidate is nearly impossible without evaluating every possible option, making the optimal solution not always feasible. What Is an Optimal Solution?
An optimal solution in any optimization problem is one that either maximizes or minimizes the objective within the given constraints. While there may be many "satisfactory" solutions, only one is optimal. Among various optimization problems, the Knapsack Problem is a classic example.
The Knapsack Problem
The Knapsack Problem has two main variants:

    0/1 Knapsack Problem: Each item can either be taken in its entirety or not at all—no partial selections are allowed. This version deals with discrete items.
    Fractional Knapsack Problem: Portions of items can be taken, treating them as continuous rather than discrete.

Greedy Algorithms Explained
Greedy algorithms work by making the locally optimal choice at every step, hoping that these choices will lead to a globally optimal solution. However, this isn't always the case. Imagine a hiker trying to reach the highest peak using a greedy approach. If they start from a lower peak and follow the steepest path, they might end up at a peak that isn't the highest overall. This demonstrates that while greedy algorithms can be effective, they may not always find the best possible solution.
The Approach to a Greedy Solution
The approach to a greedy solution is straightforward and can be used to greatly improve the potential computational time for solving an optimization problem. In a greedy algorithm, we only need to arrange the items in order of importance and select the items starting from the most important with respect to our constraints. This means, we simply sort the items based on a key (and usually the key is the objective function we are trying to pick an optimal solution for). For instance, a greedy burglar will sort the items inside a burgled house based on the price of each item, and select the items with the highest price first, if the item can fit in his bag then he’ll take it, if not he’ll move onto the next. And he will keep doing this until the bag gets full.
Note on Sorting and Complexity
Note that the key by which a greedy solution will sort the items is arbitrary, and participants are free to choose whatever key they feel most suitable. The complexity of implementing such a greedy algorithm is dependent on the sorting procedure, and thus a sorting greedy algorithm is O(nlogn), in tandem with the runtime of sorting. Also, note that a more efficient approach might be an exhaustive search depending on if a burglar is only looking for one item, or if the size of the item array is small enough.
Implementing a Greedy Algorithm in Python
To implement a greedy algorithm in Python, define a higher-order function that takes a list of items, a maximum weight (the constraint), and a key function that determines the sorting criterion. Here's an example:
Python

def greedy(items, maxWeight, keyFunction):
    """Assumes items is a list, maxWeight >= 0,
    keyFunction maps elements of items to numbers."""
    itemsCopy = sorted(items, key=keyFunction, reverse=True)
    result = []
    totalValue, totalWeight = 0.0, 0.0
    for item in itemsCopy:
        if (totalWeight + item.getWeight()) <= maxWeight:
            result.append(item)
            totalWeight += item.getWeight()
            totalValue += item.getValue()
    return (result, totalValue)

# ... (rest of the code remains the same)

Finding the Optimal Solution to the 0/1 Knapsack Problem
To find the optimal solution to the 0/1 Knapsack Problem, one could use exhaustive enumeration, where all possible combinations of items are generated, and the combination that yields the best value within the weight limit is chosen. Although this method guarantees an optimal solution, it is computationally expensive. The time complexity is O(n×2n), making it impractical for large datasets.
Conclusion
Optimization problems are prevalent in various real-life scenarios, and while greedy algorithms offer a quick way to find satisfactory solutions, they do not always guarantee optimality. For certain`
        },

    ];

    return (
        <>
            <div className="blog-posts">
                {blogPosts.map((post, index) => (
                    <div key={index} className="carouselCard card">
                    <h1 className="cardText">{post.title}</h1>
                    <div id={`carouselExampleControls${index}`} className="carousel slide" data-bs-ride="carousel">
                        <button className="carousel-control-prev carouselControlButton" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next carouselControlButton" type="button" data-bs-target={`#carouselExampleControls${index}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p><em>Under construction</em></p>
                        <p className="cardText">{post.content}</p>
                    </div>
            </div>
                ))}
            </div>
        </>
    )
}
