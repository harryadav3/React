import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
];

const Question11 = () => {
  const [itemList, setItemList] = useState(items);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItemList = Array.from(itemList);
    const [reorderedItem] = newItemList.splice(result.source.index, 1);
    newItemList.splice(result.destination.index, 0, reorderedItem);

    setItemList(newItemList);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Drag and Drop</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="itemList">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {itemList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="bg-gray-200 p-2 mb-2 rounded-md flex items-center cursor-grab"
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Question11;